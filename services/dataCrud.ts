

export const dataArray: FormData[] = [ 
    {
        id: 1,
        name: "laura",
        email: "laura.tascon@udea.edu.co",
        phone: 523566
    }
]


interface FormData {
    
        id: number,
        name: string,
        email: string,
        phone: number
    
}

export const pushData = ( data : FormData) => dataArray.push(data)


export const getData = () => dataArray;