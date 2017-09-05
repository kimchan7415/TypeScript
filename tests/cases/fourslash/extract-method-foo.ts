/// <reference path='fourslash.ts' />

////function f() {
////    /*start*/if (1) {
////         1;
////    }/*end*/
////}

goTo.select('start', 'end')
edit.applyRefactor({
    refactorName: "Extract Method",
    actionName: "scope_1",
    actionDescription: "Extract function into global scope",
});
verify.currentFileContentIs(
`function f() {
    newFunction();
}
function newFunction() {
    if(1) {
        1;
    }
}`);
