import styles from './tasks.module.css';

/* eslint-disable-next-line */
export interface TasksProps {}

export function Tasks(props: TasksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Tasks!</h1>
    </div>
  );
}

export default Tasks;
