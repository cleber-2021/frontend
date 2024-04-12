import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-Width:  800px;
    margin: 20px auto;
    word-break: break-all;

`;

export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Tbody = styled.tbody``;
export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px ){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;


const Grid = ({users}) => {

    const handleDelete = async (idusuario) =>{
        await axios
        .delete("http://localhost:8800/" + idusuario)
        .then(({data}) => {
            const newArray = users.filter((user) => user.idusuario !== idusuario);

            setUsers(newArray);
            toast.success(data);
        })
        .catch(({data}) => toast.error(data));

        setOnEdit(null);

    };

    return(
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Data de Nascimento</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) =>(
                    <Tr key={i}>
                       <Td widows="30%">{item.nome}</Td> 
                       <Td widows="30%">{item.email}</Td>
                       <Td widows="30%" onlyWeb>
                        {item.data_nascimento}
                        </Td>
                        <Td alignCenter width = "5%">
                            <FaEdit />
                        </Td>
                        <Td alignCenter width = "5%">
                            <FaTrash onClick={() => handleDelete(item.idusuario)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>

    );

}

export default Grid;