import { useState } from "react"
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LocalOfferOutlined from "@mui/icons-material/LocalOfferOutlined";
import People from "@mui/icons-material/People";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import Customers from "../screens/Customers";
import Products from "../screens/Products";
import Catalogs from "../screens/Catalogs";
import Profile from "../screens/Profile";

export default function Menu() {
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        centered
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab style={{ fontSize: 10 }} label="Clientes" icon={<People />} value="1" />
                        <Tab style={{ fontSize: 10 }} label="Produtos" icon={<LocalOfferOutlined />} value="2" />
                        <Tab style={{ fontSize: 10 }} label="Catalogos" icon={<ListAltOutlinedIcon />} value="3" />
                        <Tab style={{ fontSize: 10 }} label="Perfil" icon={<StoreMallDirectoryOutlinedIcon />} value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Customers /></TabPanel>
                <TabPanel value="2"><Products/></TabPanel>
                <TabPanel value="3"><Catalogs/></TabPanel>
                <TabPanel value="4"><Profile/></TabPanel>

            </TabContext>
        </Box>
    );
}
