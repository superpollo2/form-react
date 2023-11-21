

interface TableProps{
    colums: string[];
    data: any[];
}

const Table = ({colums, data}: TableProps) =>{
    console.log()
    return(
        <table  className="bg-white  shadow-xl border-collapse rounded-xl border text-center border-pink-100 table-auto ">
            <thead className=" bg-pink-400 text-slate-50 ">
                <tr >
                    {colums.map((colum, index) =>(
                        <th key={index} className=" border-pink-800 p-2">{colum}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) =>(
                    <tr key={row.id}>
                        {colums.map((colum, index) =>(
                            <td key={index} className="border  border-pink-100 py-1 px-4">{row[colum]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export {Table}