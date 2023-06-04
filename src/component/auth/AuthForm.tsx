import {FC, useState} from 'react'
import {
  Box,
  Tab,
  Tabs,
} from "@mui/material";
import LoginTab from "@/component/auth/LoginTab";
import RegistrationTab from "@/component/auth/RegistrationTab";

const AuthForm: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_: any, newValue: any) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Tabs value={activeTab} onChange={handleTabChange} centered>
        <Tab label="Sign in" />
        <Tab label="Sign up" />
      </Tabs>
      <Box sx={{ p: 2 }}>
        {activeTab === 0 && <LoginTab />}
        {activeTab === 1 && <RegistrationTab />}
      </Box>
    </Box>
  );
};

export default AuthForm;