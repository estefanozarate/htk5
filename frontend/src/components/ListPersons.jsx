import {useState,useEffect} from 'react';
import PersonService from '../../src/core/services/PersonService'


const ListPeronsComponent = () => {
    const [listPersons, setListPersons] = useState([]);

    useEffect(() => {
        fnListarTodos();
    },[]);

    const fnListarTodos = () => {
        PersonService.listarTodos().then(response =>{
            console.dir(response);
            setListPersons(response.data);
        }).catch(e =>{
            console.dir(e);
        });
    }

    return ( 
        <>
           <h3>List Persons</h3>
           <hr />

           <table className='table table-bordered table-striped mt-3'>
                <thead className='bg-primary'>
                    <tr className='text-white'>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>              
                </thead>
                <tbody>
                    { 
                        listPersons.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    } 

                    {
                        listPersons.length == 0  && 
                        <tr>
                            <td className='text-center' colSpan={2}>No hay datos</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}
 
export default ListPeronsComponent;