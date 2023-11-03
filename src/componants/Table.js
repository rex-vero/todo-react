import { useState } from "react";
import styles from './Table.module.css'
const Table = (props) => {
    const [job, setJobs] = useState('');
    const [days, setDays] = useState('');
    const [edit, setEdit] = useState(false);
    const getIndex = (item) => {
        return props.data.indexOf(item) + 1;
    }
    const trash = (item) => {
        const deleter = props.data.filter(element => item.id !== element.id)
        props.updater(deleter);
    }
    const handle = (e) => {
        e.preventDefault();
        const newItems = { id: crypto.randomUUID(), job, days }
        props.updater(prevState => [...prevState, newItems])
        setJobs('');
        setDays('');
    }
    return (
        <div className={`d-flex flex-column-reverse justify-content-around align-items-center vh-100 `}>
            <div className={`card border-black rounded-5 ${styles.card}`}>
                <form className="d-flex flex-column card-body">
                    <lable className={styles.lable}>Jobs To Do</lable>
                    <input type="text" value={job} className={styles.input} onChange={(e) => { setJobs(e.target.value) }} />
                    <lable className={styles.lable}>Days</lable>
                    <input type="number" value={days} className={styles.input} onChange={(e) => { setDays(e.target.value) }} />
                    <button className={`mt-2 align-self-center rounded-circle ${styles.btn}`} onClick={handle}><i className="bi bi-save"></i></button>
                </form>
            </div>
            {props.data.length > 0 && <div className='col-9'>
                <table className='table table-dark table-striped-columns'>
                    <thead>
                        <tr>
                            <th className="text-center" scope="col">Edit</th>
                            <th scope="col">#</th>
                            <th scope="col">Jobs</th>
                            <th scope="col">Days</th>
                            <th className="text-center" scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className="text-center"><a href="#" onClick={() => { setEdit(item.id) }} className={styles.edit}><i className='bi bi-pencil-square'></i></a></td>
                                    <th scope="row">{getIndex(item)}</th>
                                    {edit !== item.id && <td>{item.job}</td>}
                                    {edit === item.id && <td><input /></td>}
                                    {edit !== item.id && <td>{item.days}</td>}
                                    {edit === item.id && <td><input /></td>}
                                    <td className="text-center"><a href="#" onClick={() => { trash(item) }} className={styles.trash}><i className='bi bi-x'></i></a></td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>}
        </div>
    )
}
export default Table;