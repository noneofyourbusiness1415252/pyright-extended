/*
 * sourceFile.test.ts
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 * Author: Eric Traut
 *
 * Unit tests for pyright sourceFile module.
 */
import * as assert from 'assert';

import { ImportResolver } from '../analyzer/importResolver';
import { SourceFile } from '../analyzer/sourceFile';
import { ConfigOptions } from '../common/configOptions';
import { FullAccessHost } from '../common/fullAccessHost';
import { combinePaths } from '../common/pathUtils';
import { createFromRealFileSystem } from '../common/realFileSystem';
import { parseAndGetTestState } from './harness/fourslash/testState';
import { createServiceProvider } from '../common/serviceProviderExtensions';

test('Empty', () => {
    const filePath = combinePaths(process.cwd(), 'src/tests/samples/test_file1.py');
    const fs = createFromRealFileSystem();
    const serviceProvider = createServiceProvider(fs);
    const sourceFile = new SourceFile(serviceProvider, filePath, '', false, false, { isEditMode: false });
    const configOptions = new ConfigOptions(process.cwd());
    const sp = createServiceProvider(fs);
    const importResolver = new ImportResolver(sp, configOptions, new FullAccessHost(fs));

    sourceFile.parse(configOptions, importResolver);
});

test('Empty Open file', () => {
    const code = `
// @filename: test.py
//// [|/*marker*/# Content|]
    `;

    const state = parseAndGetTestState(code).state;
    const marker = state.getMarkerByName('marker');

    assert.strictEqual(
        state.workspace.service.test_program.getSourceFile(marker.fileName)?.getFileContent(),
        '# Content'
    );

    state.workspace.service.updateOpenFileContents(marker.fileName, 1, '');
    assert.strictEqual(state.workspace.service.test_program.getSourceFile(marker.fileName)?.getFileContent(), '');
});
