const getTypePlace = (key: number) => {
    const type_place: Record<number, string> = {
        1: 'Urząd',
        2:'Pub',
        3: 'Restauracja',
        4: 'Muzeum', 
        5:  "Miejsce związane z kulturą"
    }
    console.log(key)
    return type_place[key] ?? "Nie znaleziono wartości";
}

export default getTypePlace