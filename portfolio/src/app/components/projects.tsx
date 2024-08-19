import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props: { [x: string]: any; children: any; value: any; index: any; }) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProjectPanel() {
  const [value, setValue] = React.useState(0);
  const [projects, setProjects] = React.useState([{
    title: "Error loading projects from remote source",
    tagline: "placeholder",
    images: { cover: "portfolio/src/media/placeholder_project.png", detail: "portfolio/src/media/placeholder_project.png" },
    description: "placeholder",
    repository: "",
    deployment: ""
  }])
  
  const projectUrl = "https://raw.githubusercontent.com/dvdzmr/portfolio/develop/projects/projects.json"

  React.useEffect(() => {
    fetch(projectUrl)
      .then(res => res.json())
      .then((data) => {
        setProjects(data);
      })
  }, []);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item two" {...a11yProps(0)} />
          <Tab label="Item three" {...a11yProps(0)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={value}>
        <h1>{projects[value]?.title}</h1>
        <p>{projects[value]?.tagline}</p>
        <p>{projects[value]?.description}</p>
      </CustomTabPanel>
    </Box>
  );
}