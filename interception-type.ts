interface interface1 {
    prop1: number
}
interface interface2 {
    prop2: number
}

type InterfaceMix = interface1 & interface2;

const interfacesMixx: InterfaceMix  = {
    prop1 : 10,
    prop2 : 15
}