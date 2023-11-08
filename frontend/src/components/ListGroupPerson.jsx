import {useState,useEffect} from 'react';
import PersonService from '../../src/core/services/PersonService'


const ListGroupPersonComponent = () => {
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
           <h3>List Group Person</h3>
           <hr />

           <table className='table table-bordered table-striped mt-3'>
                <thead className='bg-primary'>
                    <tr className='text-white'>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Group</td>
                    </tr>              
                </thead>
                <tbody>
                    { 
                        listPersons.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <ul>{
                                            item.groups.map(item2 =>(
                                                <li key={item2.id}>{item2.name}</li>
                                            ))
                                        }
                                    </ul>

                                    {
                                        item.groups.length == 0  && 
                                        <span className="badge text-bg-danger">No hay grupo</span>
                                    }
                                </td>
                            </tr>
                        ))
                    } 

                    {
                        listPersons.length == 0  && 
                        <tr>
                            <td className='text-center' colSpan={3}>No hay datos</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}
 
export default ListGroupPersonComponent;