import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import {Button} from "@mui/material";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/hook";
import {clearFileList} from "@/store/fileSlice";

export default function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch()

  const navItems = [
    {id: 0, pathName: '/dashboard', label: 'Home'},
    {id: 1, pathName: '/dashboard/profile', label: 'Profile'}
  ];

  const handleClick = (routerPath: string, id: number) => {
    router.push(routerPath)
    if (id === 1) {
      setTimeout(() => {
        dispatch(clearFileList())
      }, 2000)
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <CloudQueueIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cloud Storage
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item.id} sx={{ color: '#fff' }} onClick={() => handleClick(item.pathName, item.id)}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}