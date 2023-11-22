import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({directories}) => {

    return(
        <div className='directory-container'>
        { directories.map((directory)=>(
        <CategoryItem category={directory} key={directory.id}/>
        )) }
    </div>
    );

}
export default Directory;