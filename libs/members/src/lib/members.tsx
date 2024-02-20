import styles from './members.module.css';

/* eslint-disable-next-line */
export interface MembersProps {}

export function Members(props: MembersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Members!</h1>
    </div>
  );
}

export default Members;
