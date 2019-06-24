import React, { Component } from 'react'
import './index.css'

class ListBanks extends Component{
    state={
        query:'',
        city:'',
        isDrop:true,    
        activePage:1,
        ban:[]
    }
    updateQuery=(e)=>{
        this.setState({
            query:e.target.value.trim(),
            isDrop:false
        })
    }
    updateCity=(e)=>{
        this.setState({
            city:e.target.value,
            isDrop:true
        })
        
    }
    handleFav=(ifsc)=>{
        const favBank=this.props.banks.map(bank=>{
            if(!bank.ifsc.localeCompare(ifsc))
            bank.isFav=!bank.isFav

            console.log("Akshit arora b"+bank.isFav)

            return bank;
        });
        console.log(favBank.isFav)      
    }
    render(){
        
        const { query } = this.state
        const {banks} = this.props
          
        const showingBanks= !this.state.isDrop
        ?query===''?
        banks
        :banks.filter((b)=>(
            b.bank_name.toLowerCase().includes(query.toLowerCase())|| 
            b.city.toLowerCase().includes(query.toLowerCase())||
            b.district.toLowerCase().includes(query.toLowerCase())||
            b.state.toLowerCase().includes(query.toLowerCase())||
            b.branch.toLowerCase().includes(query.toLowerCase())||
            b.ifsc.toLowerCase().includes(query.toLowerCase())||
            b.address.toLowerCase().includes(query.toLowerCase())||
            b.bank_id === query
        )) 
        :this.state.city===''?
        banks
        :banks.filter((b)=>(
             b.city.toLowerCase().includes(this.state.city.toLowerCase())
        ))
   
        return(
            <div>
                {/* <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={10}
                totalItemsCount={banks.length}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                /> */}
                <select onChange={this.updateCity} name="city">
                    <option name="city" value="">Options</option>
                    <option name="city" value="Mumbai">Mumbai</option>
                    <option name="city" value="Delhi">Delhi</option>
                    <option name="city" value="Bangalore">Bangalore</option>
                    <option name="city" value="Kolkata">Kolkata</option>
                </select>

            <input
                className='search-contacts'
                type='text'
                placeholder='Bank Name'
                value={query}
                onChange={this.updateQuery}></input>
                
                <ul
                className="contact-list">
                    {showingBanks.map((bank,i)=>(
                        <li key={i} className="contact-list-item">
                            <b>{bank.bank_name}</b><br/>
                            <b>{"Branch: "}</b>{bank.branch}<br/>
                            <b>{"Address: "}</b>{bank.address}<br/>
                           <button className={bank.isFav==='true' ?"fav":"nofav"} onClick={this.handleFav(bank.ifsc) } ></button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListBanks