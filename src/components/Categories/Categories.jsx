import './categories.styles.scss';
import CategoryItem from '../CategoryItem/CategoryItem';

const Categories = ({ categories }) => {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          imageUrl={category.imageUrl}
          title={category.title}
          id={category.id}
        />
      ))}
    </div>
  );
};
export default Categories;
