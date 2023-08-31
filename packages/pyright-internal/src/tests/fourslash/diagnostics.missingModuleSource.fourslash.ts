/// <reference path="fourslash.ts" />

// @filename: test.py
////
//// import [|/*marker1*/myLib.module|]
//// import [|/*marker6*/myLib.module|] as m1
//// import myLib.module1
//// from myLib import [|/*marker3*/module|]
//// from myLib import [|/*marker7*/module|] as m2
//// from [|/*marker2*/myLib.module|] import foo
////
//// from .conflict import [|/*marker5*/module2|]
//// from .conflict import [|/*marker8*/module2|] as m3
//// from [|/*marker4*/.conflict.module2|] import foo2
////

// @filename: myLib/module.pyi
//// def foo(): ...

// @filename: myLib/module1.pyi
////

// @filename: myLib/module1.py
////

// @filename: conflict/module2.pyi
//// def foo2(): ...

// @filename: conflict/module2.py
// @library: true
////

{
    helper.verifyDiagnostics({
        marker1: {
            category: 'warning',
            message: 'Import "myLib.module" could not be resolved from source in the "python" environment.',
        },
        marker2: {
            category: 'warning',
            message: 'Import "myLib.module" could not be resolved from source in the "python" environment.',
        },
        marker3: {
            category: 'warning',
            message: 'Import "myLib.module" could not be resolved from source in the "python" environment.',
        },
        marker4: {
            category: 'warning',
            message: 'Import ".conflict.module2" could not be resolved from source in the "python" environment.',
        },
        marker5: {
            category: 'warning',
            message: 'Import ".conflict.module2" could not be resolved from source in the "python" environment.',
        },
        marker6: {
            category: 'warning',
            message: 'Import "myLib.module" could not be resolved from source in the "python" environment.',
        },
        marker7: {
            category: 'warning',
            message: 'Import "myLib.module" could not be resolved from source in the "python" environment.',
        },
        marker8: {
            category: 'warning',
            message: 'Import ".conflict.module2" could not be resolved from source in the "python" environment.',
        },
    });
}
