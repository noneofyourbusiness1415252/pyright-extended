/*
 * typeEvaluator5.test.ts
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT license.
 * Author: Eric Traut
 *
 * Unit tests for pyright type evaluator. Tests are split
 * arbitrarily among multiple files so they can run in parallel.
 */

import { ConfigOptions } from '../common/configOptions';
import { PythonVersion } from '../common/pythonVersion';
import * as TestUtils from './testUtils';

test('TypeParams1', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams1.py'], configOptions);
    TestUtils.validateResults(analysisResults, 4);
});

test('TypeParams2', () => {
    const configOptions = new ConfigOptions('.');

    configOptions.defaultPythonVersion = PythonVersion.V3_11;
    const analysisResults1 = TestUtils.typeAnalyzeSampleFiles(['typeParams2.py'], configOptions);
    TestUtils.validateResults(analysisResults1, 2);

    configOptions.defaultPythonVersion = PythonVersion.V3_12;
    const analysisResults2 = TestUtils.typeAnalyzeSampleFiles(['typeParams2.py'], configOptions);
    TestUtils.validateResults(analysisResults2, 0);
});

test('TypeParams3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 7);
});

test('TypeParams4', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams4.py'], configOptions);
    TestUtils.validateResults(analysisResults, 2);
});

test('TypeParams5', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams5.py'], configOptions);
    TestUtils.validateResults(analysisResults, 7);
});

test('TypeParams6', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams6.py'], configOptions);
    TestUtils.validateResults(analysisResults, 3);
});

test('TypeParams7', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeParams7.py'], configOptions);
    TestUtils.validateResults(analysisResults, 4);
});

test('AutoVariance1', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['autoVariance1.py'], configOptions);
    TestUtils.validateResults(analysisResults, 16);
});

test('AutoVariance2', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['autoVariance2.py'], configOptions);
    TestUtils.validateResults(analysisResults, 0);
});

test('AutoVariance3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['autoVariance3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 18);
});

test('AutoVariance4', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['autoVariance4.py'], configOptions);
    TestUtils.validateResults(analysisResults, 4);
});

test('TypeAliasStatement1', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeAliasStatement1.py'], configOptions);
    TestUtils.validateResults(analysisResults, 3);
});

test('TypeAliasStatement2', () => {
    const configOptions = new ConfigOptions('.');

    configOptions.defaultPythonVersion = PythonVersion.V3_11;
    const analysisResults1 = TestUtils.typeAnalyzeSampleFiles(['typeAliasStatement2.py'], configOptions);
    TestUtils.validateResults(analysisResults1, 1);

    configOptions.defaultPythonVersion = PythonVersion.V3_12;
    const analysisResults2 = TestUtils.typeAnalyzeSampleFiles(['typeAliasStatement2.py'], configOptions);
    TestUtils.validateResults(analysisResults2, 0);
});

test('TypeAliasStatement3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeAliasStatement3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 2);
});

test('TypeAliasStatement4', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_12;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeAliasStatement4.py'], configOptions);
    TestUtils.validateResults(analysisResults, 5);
});

test('Hashability1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['hashability1.py']);
    TestUtils.validateResults(analysisResults, 10);
});

test('Override1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['override1.py']);
    TestUtils.validateResults(analysisResults, 3);
});

test('Override2', () => {
    const configOptions = new ConfigOptions('.');

    const analysisResults1 = TestUtils.typeAnalyzeSampleFiles(['override2.py'], configOptions);
    TestUtils.validateResults(analysisResults1, 0);

    configOptions.diagnosticRuleSet.reportImplicitOverride = 'error';
    const analysisResults2 = TestUtils.typeAnalyzeSampleFiles(['override2.py'], configOptions);
    TestUtils.validateResults(analysisResults2, 2);
});

test('TypeVarDefault1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefault1.py']);
    TestUtils.validateResults(analysisResults, 12);
});

test('TypeVarDefault2', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefault2.py'], configOptions);
    TestUtils.validateResults(analysisResults, 24);
});

test('TypeVarDefault3', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefault3.py']);
    TestUtils.validateResults(analysisResults, 4);
});

test('TypeVarDefault4', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefault4.py'], configOptions);
    TestUtils.validateResults(analysisResults, 3);
});

test('TypeVarDefault5', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefault5.py'], configOptions);
    TestUtils.validateResults(analysisResults, 0);
});

test('TypeVarDefaultClass1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultClass1.py']);
    TestUtils.validateResults(analysisResults, 0);
});

test('TypeVarDefaultClass2', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultClass2.py'], configOptions);
    TestUtils.validateResults(analysisResults, 8);
});

test('TypeVarDefaultClass3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultClass3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 9);
});

test('TypeVarDefaultTypeAlias1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultTypeAlias1.py']);
    TestUtils.validateResults(analysisResults, 0);
});

test('TypeVarDefaultTypeAlias2', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultTypeAlias2.py']);
    TestUtils.validateResults(analysisResults, 9);
});

test('TypeVarDefaultTypeAlias3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultTypeAlias3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 9);
});

test('TypeVarDefaultFunction1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultFunction1.py']);
    TestUtils.validateResults(analysisResults, 0);
});

test('TypeVarDefaultFunction2', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultFunction2.py']);
    TestUtils.validateResults(analysisResults, 1);
});

test('TypeVarDefaultFunction3', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.defaultPythonVersion = PythonVersion.V3_13;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeVarDefaultFunction3.py'], configOptions);
    TestUtils.validateResults(analysisResults, 1);
});

test('FutureImport1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['futureImport1.py']);
    TestUtils.validateResults(analysisResults, 0);
});

test('FutureImport2', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['futureImport2.py']);
    TestUtils.validateResults(analysisResults, 2);
});

test('FutureImport3', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['futureImport3.py']);
    TestUtils.validateResults(analysisResults, 1);
});

test('Conditional1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['conditional1.py']);
    TestUtils.validateResults(analysisResults, 15);
});

test('TypePrinter1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typePrinter1.py']);
    TestUtils.validateResults(analysisResults, 0);
});

test('TypePrinter3', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typePrinter3.py']);
    TestUtils.validateResults(analysisResults, 2);
});

test('TypeAliasType1', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeAliasType1.py']);
    TestUtils.validateResults(analysisResults, 15);
});

test('TypeAliasType2', () => {
    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typeAliasType2.py']);
    TestUtils.validateResults(analysisResults, 5);
});

test('TypedDictReadOnly1', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.diagnosticRuleSet.enableExperimentalFeatures = true;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typedDictReadOnly1.py'], configOptions);
    TestUtils.validateResults(analysisResults, 5);
});

test('TypedDictReadOnly2', () => {
    const configOptions = new ConfigOptions('.');
    configOptions.diagnosticRuleSet.enableExperimentalFeatures = true;

    const analysisResults = TestUtils.typeAnalyzeSampleFiles(['typedDictReadOnly2.py'], configOptions);
    TestUtils.validateResults(analysisResults, 9);
});
