import kpiImg from '../../../assets/Remove-bg 1.png'
import './Advertis.scss'
const Advertis = () => {
    return(
        <>
        <div className="kpi">
            <img src={kpiImg} width="200" height="200"/>

            </div>
            <div className="content">
                <h4>Chào mừng đến với KPInit</h4>
                <span>Cùng nhau cố gắng hoàn thành công việc ngày hôm nay nhé</span>
                <div className='infor'>
                    <div className='left'>
                        <span> Công việc ngày hôm nay <br/></span>
                        <span>156</span>
                    </div>
                    <div className='right'>
                    <span> Công việc ngày hôm nay <br/></span>
                        <span>156</span>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Advertis;