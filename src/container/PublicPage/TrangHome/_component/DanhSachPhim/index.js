import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Loader from '../../../components/Loader';
import ThePhim from './_component/ThePhim';
import actFetchPhim from './modules/action';

const theme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: '"Dosis", sans-serif',
                    fontSize: '24px',
                    color: '#fff',
                    '&:hover': {
                        color: '#dcf836'
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                    }
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#dcf836'
                }
            }
        },
        MuiTabPanel: {
            styleOverrides: {
                root: {
                    '& .row a': {
                        color: '#fff',
                        fontFamily: '"Dosis", sans-serif',
                    },
                    paddingLeft: 0,
                    paddingRight: 0
                }
            }
        }
    }
})

export default function DanhSachPhimComp() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchPhim());
    }, [])

    const loading = useSelector(state => state.homePhimDangChieuReducer.loading)
    const dataPhim = useSelector(state => state.homePhimDangChieuReducer.dataPhim)

    const renderDSPhimDangChieu = () => {
        return dataPhim?.content?.items?.map((phim, index) => {
            if (phim.dangChieu) return <ThePhim phim={phim} key={index} />
        })
    }

    const renderDSPhimSapChieu = () => {
        return dataPhim?.content?.items?.map((phim, index) => {
            if (phim.sapChieu) return <ThePhim phim={phim} key={index} />
        })
    }

    if (loading) return <Loader />
    return (
        <section style={{ backgroundColor: '#020d18' }}>
            <ThemeProvider theme={theme}>
                <Container maxWidth='lg' sx={{ py: 5 }}>
                    <Box sx={{ width: '100%' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="#PHIM ĐANG CHIẾU" value="1" />
                                    <Tab label="#PHIM SẮP CHIẾU" value="2" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div className='row'>
                                    {renderDSPhimDangChieu()}
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                <div className='row'>
                                    {renderDSPhimSapChieu()}
                                </div>
                            </TabPanel>
                        </TabContext>
                    </Box>
                </Container>
            </ThemeProvider>
        </section>
    )
}
