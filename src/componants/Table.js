import { useState } from "react";
import styles from './Table.module.css'
const Table = (props) => {
    const [job, setJobs] = useState('');
    const [days, setDays] = useState('');
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
                            <th scope="col">Delete</th>
                            <th scope="col">#</th>
                            <th scope="col">Jobs</th>
                            <th scope="col">Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td className="text-center"><a href="#" onClick={() => { trash(item) }} className={styles.trash}><i className='bi bi-x'></i></a></td>
                                    <th scope="row">{getIndex(item)}</th>
                                    <td>{item.job}</td>
                                    <td>{item.days}</td>
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