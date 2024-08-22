import '../App.css';
import Image from '../componentes/image';
function Container(){
    return(

            <div className='flex'>
                
                 
                <div className='Container'>
                <div className='Cards'>
                       <Image/> 
                    <div className='Descricao'>
                        <h3>Pizza de Calabresa</h3>
                        <h3>Pizza de Marguerita</h3>

                    </div>
                </div>
                </div>
            </div>

    );
}
export default Container;