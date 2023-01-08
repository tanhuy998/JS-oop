



function lex_accessModifer(token) {

    if (token == 'private') return OOPAccesModifier.PRIVITE;

    if (token == 'protected') return OOPAccesModifier.PROTECTED;

    if (token == 'public') return OOPAccesModifier.PUBLIC;

    throw new Error('OOP-TYPE-ERROR: unknown access modifier \'', token, '\'');
}

function context_accessObjectMember(_object, _member, _accessor, _context = OOPAccesModifier.PRIVITE) {

    let call = (context_resolveAccessModifier).bind(_object);

    const resolved_access_modifier = call((_object, _member));


}

function context_resolveAccessModifier(_object, _member) {

    if (!this.#prop[_member]) throw new Error(`OOP-ERROR: could not access ${_member} of type '${_object.constructor.name}'`);
}

class OOPAccesModifier {

    static #public = Symbol('public');
    static #privite = Symbol('private');
    static #protected = Symbol('protected');

    static get PUBLIC() {

        return OOPAccesModifier.#public;
    }

    static get PRIVITE() {

        return OOPAccesModifier.#privite;
    }

    static get PROTECTED() {

        return OOPAccesModifier.#protected;
    }
}

class OOPClass {


    #prop;

    constructor() {

        this.#prop = {
            private: {},
            protected: {},
            public: {}
        }

        const class_name = super.constructor.name;

        if (class_name == 'Object') {
            
            this.#prop[this.constructor.name] = this.constructor.name;
        }
        else {

            this.#prop[super.constructor.name] = class_name;
        }



        return new Proxy(this, {

            get: (target, prop, receiver) => {
                context_accessObjectMember(target, prop, receiver)
            },
            set: () => {

            },

            deleteProperty: () => {

            },
            apply: () => {

            },
            isExtensible: (_this) => {

                return false;
            },
        })
    }
}

