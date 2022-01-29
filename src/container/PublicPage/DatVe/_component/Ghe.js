import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { actChonGhe } from '../modules/action';

const StyledGhe = styled(Button, {
    shouldForwardProp: (prop) => !['daDat', 'duocChon', 'ghe', 'value'].includes(prop),
})(({ daDat, duocChon }) => ({
    border: 'none',
    textAlign: 'center',
    backgroundColor: '#dbdcde',
    color: '#000',

    ...(daDat && {
        backgroundColor: '#e41b00',
        cursor: 'not-allowed',
        '&.Mui-disabled': {
            color: '#000',
        }
    }),
    ...(duocChon && {
        backgroundColor: '#79c71c',
    })
}));


export default function Ghe(props) {
    const { daDat, value, ghe } = props;
    const gheIndex = (tenGhe) => {
        const factor = Math.floor(parseInt(tenGhe) / 16)
        const soGhe = (parseInt(tenGhe) - (16 * factor)) || 16;
        return soGhe
    }

    const gheValue = gheIndex(value);

    const dispatch = useDispatch();
    const chonGhe = (ghe) => {
        dispatch(actChonGhe(ghe))
    }

    const danhSachGheChon = useSelector(state => state.datVeReducer.danhSachGheChon);

    const gheDuocChon = (danhSachGheChon) => {
        if (danhSachGheChon.find(gheChon => gheChon.tenGhe === value)) {
            return true
        }
        return false
    }
    const duocChon = gheDuocChon(danhSachGheChon);

    return (
        <StyledGhe
            sx={
                {
                    width: '23px',
                    height: '23px',
                    lineHeight: '23px',
                    fontSize: '13px',
                    padding: 0,
                    minWidth: 0,
                    margin: '2px 0'
                }
            }
            daDat={daDat}
            duocChon={duocChon}
            disabled={daDat}
            onClick={() => chonGhe(ghe)}
        >
            {gheValue}
        </StyledGhe >
    )
}
