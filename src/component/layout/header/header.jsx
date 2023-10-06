
import Search from '../Search';
import className from 'classnames/bind';



const cx = classNames.bind(style);

function Header() {
    return (

        <Header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src=""></img>
            </div>

            <div className={cx('Search')}>
                <input placeholder="Search food"> </input>
                <button className={cx('Search btn')} ><i class='bx bx-search-alt-2'>{/* Search  */}</i></button>
            </div>
        </Header>
    )
}