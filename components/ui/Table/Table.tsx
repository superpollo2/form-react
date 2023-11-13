

interface TableProps{
    colums: string[];
    data: any[];
}

const Table = ({colums, data}: TableProps) =>{
    console.log()
    return(
        <table  className="bg-white  border-collapse rounded-xl border text-center border-slate-500 table-auto ">
            <thead className="bg-zinc-100 ">
                <tr >
                    {colums.map((colum, index) =>(
                        <th key={index} className="border  border-slate-600 p-2">{colum}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) =>(
                    <tr key={row.id}>
                        {colums.map((colum, index) =>(
                            <td key={index} className="border  border-slate-600 py-1 px-4">{row[colum]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export {Table}