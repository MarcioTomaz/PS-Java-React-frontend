import React from 'react'
import Input from './Input'
import { useState } from 'react';
import TransferenciaService from '../Service/TransferenciaService';

const transferenciaService = new TransferenciaService;

const Banco = () => {

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const [operatorName, setOperatorName] = useState('');

    const search = () => {
        
        transferenciaService.findAlltransferencias()
            .then( response => {
                console.log(response.data)
            }).catch( err => {

            }).finally( 
            )
    }


    return (
        <>

        <Table />
            <section className=" container border px-5 py-5 mb-5 my-5 font-weight-bold ">

                <div className=" ">

                    <div className="row">                       

                        <Input
                            id="startDate"
                            label="Data Início"
                            type="date"
                            name="startDate"
                            value={startDate}
                            setValue={setStartDate}/>

                        <Input
                            id="endDate"
                            label="Data Fim"
                            type="date"
                            name="endDate"
                            value={endDate}
                            setValue={setEndDate} />

                        <Input
                            id="operatorName"
                            label="Nome operador"
                            type="text"
                            name="operatorName"
                            value={operatorName}
                            setValue={setOperatorName}/>

                        <div className="col-1">
                            <button 
                                className="btn btn-primary mt-5 " 
                                onClick={search}>Pesquisar</button>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Banco