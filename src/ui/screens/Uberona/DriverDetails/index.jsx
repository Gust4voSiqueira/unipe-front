import './styles.css'

import { useParams } from 'react-router-dom';
import { Header } from '../../../components/Header'

export function DriverDetails() {
    const { idDriver } = useParams();

    return (
        <Header title={idDriver} />
    )
}