// Convert JSON OBJECT to OOP
import Room from './Room';
import Item from './Item';
import Data from './Data';

// Tạo instance của Room
let room = new Room();
for(let item of Data){
    let id=item.id;
    let type=item.type;
    let name=item.name;
    let imgSrc_jpg=item.imgSrc_jpg;
    let imgSrc_png=item.imgSrc_png;
    let newItem=new Item(id,type,name,imgSrc_jpg,imgSrc_png)
    room.addItem(newItem)
}
export default room;



