///<reference path='references.ts' />

/* @internal */
namespace ts.formatting {
    export class Rule {
        public name?: string;
        constructor(
            readonly Descriptor: RuleDescriptor,
            readonly Operation: RuleOperation,
            readonly Flag: RuleFlags = RuleFlags.None) {
        }

        public toString() { //kill
            return "[desc=" + this.Descriptor + "," +
                "operation=" + this.Operation + "," +
                "flag=" + this.Flag + "]";
        }
    }
}