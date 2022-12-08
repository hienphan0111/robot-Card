import Card from './Card';
import { robots } from './robots';

const CardList = () => {
    const list = robots.map((user) => {
        return <Card id={user.id} name={user.name} email={user.email} />
    })

    return list;
}

export default CardList;