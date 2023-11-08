import {useState,useEffect} from 'react';
import GroupService from '../../src/core/services/GroupService'


const ListGroupsComponent = () => {
    const [listGroups, setlistGroups] = useState([]);

    useEffect(() => {
        fnListarTodos();
    },[]);

    const fnListarTodos = () => {
        GroupService.listarTodos().then(response =>{
            setlistGroups(response.data);
        }).catch(e =>{
            console.dir(e);
        });
    }

    return ( 
        <>
           <h3>List Groups</h3>
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
                        listGroups.map(item =>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))
                    } 

                    {
                        listGroups.length == 0  && 
                        <tr>
                            <td className='text-center' colSpan={2}>No hay datos</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    );
}
 
export default ListGroupsComponent;