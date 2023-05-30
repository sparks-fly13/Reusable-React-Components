import Button from "../components/Button";
import {GoBell, GoCloudDownload, GoArchive} from 'react-icons/go';

function ButtonPage () {
    return (
        <div>
            <div>
                <Button primary className='mb-5'><GoBell />Hello</Button>    
            </div>
            <div>
                <Button secondary rounded><GoArchive />Bye</Button>
            </div>
            <div>
                <Button success rounded><GoCloudDownload />yeah</Button>
            </div>
            <div>
                <Button warning outline>tay</Button>
            </div>
            <div>
                <Button danger>pull</Button>
            </div>
        </div>
    )
};

export default ButtonPage;