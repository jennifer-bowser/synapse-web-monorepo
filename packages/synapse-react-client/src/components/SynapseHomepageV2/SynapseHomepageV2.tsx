import React from 'react'
import {
  Box,
  Button,
  SxProps,
  Typography,
  Chip,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  IconButton,
  Link,
} from '@mui/material'
import SynapseFullLogo from '../../assets/icons/SynapseFullLogo'
import { TypeAnimation } from 'react-type-animation'
import { useOneSageURL } from '../../utils/hooks'
import { ReactComponent as Image1 } from '../../assets/homepage/image1.svg'
import { useSynapseContext } from '../../utils'
import { SynapseTrendingProjects } from './SynapseTrendingProjects'
import { SynapseByTheNumbers } from './SynapseByTheNumbers'
import { SynapseFeatures } from './SynapseFeatures'
import { SynapseInAction } from './SynapseInAction'
import { backgroundInlineJpeg } from '../../assets/homepage/header-splash'
import { SynapsePartners } from './SynapsePartners'
import { SynapsePlans } from './SynapsePlans'
import { useInView } from 'react-intersection-observer'
import SageFullLogo from '../../assets/icons/SageFullLogo'
import { LoginTwoTone, MenuOutlined } from '@mui/icons-material'
import { SynapseFeaturedDatasets } from './SynapseFeaturedDatasets'
import { onSearch, SynapseHomepageSearch } from './SynapseHomepageSearch'

const synapseInActionTable = 'syn61670075'
const past30DaysDownloadMetricsTable = 'syn61597084'
const generalStatsMetricsTable = 'syn61588163'
const featuredDatasetsTable = 'syn61609402'
const searchAutocompleteTable = 'syn61670515'

const popularSearches = [
  "Alzheimer's Disease",
  'Parkinson',
  'Neurofibromatosis',
  'HTAN',
  'ukb-ppp',
  'ROSMAP',
  'GENIE',
]
const LOGIN_LINK = '/LoginPlace:0'
const MY_DASHBOARD_LINK = '/Profile:v'

export const darkTextColor = '#22252A'
export const homepageBodyText: SxProps = {
  fontSize: '24px',
  fontWeight: 400,
  lineHeight: '34px',
  color: darkTextColor,
}

export const SynapseHomepageV2: React.FunctionComponent = () => {
  const { accessToken } = useSynapseContext()
  const isSignedIn = !!accessToken
  const registrationLink = useOneSageURL('/register1')
  const resourcesLink = useOneSageURL('/sageresources')
  const theme = useTheme()
  const isDesktopView = useMediaQuery(theme.breakpoints.up('lg'))
  const isSmallView = useMediaQuery(theme.breakpoints.down('md'))

  // mobile view nav bar menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  //optimization - prioritize loading above-the-fold content (delay loading below the fold)
  const { ref, inView } = useInView({ triggerOnce: true })
  const navTextButtonSx: SxProps = {
    fontSize: '18px',
    lineHeight: '24px',
    fontWeight: 400,
  }
  const h2Sx: SxProps = {
    fontSize: {
      xs: '36px',
      md: '52px',
    },
    fontWeight: 600,
    lineHeight: '52px',
    color: darkTextColor,
  }

  const defaultHomepageText: SxProps = {
    color: darkTextColor,
    fontWeight: 600,
  }
  const titleSx: SxProps = {
    ...defaultHomepageText,
    fontWeight: 300,
    fontSize: {
      xs: '48px',
      md: '72px',
    },
    lineHeight: {
      xs: '120%',
      md: '82px',
    },
    color: 'white',
  }
  const navButtonSx: SxProps = {
    borderRadius: '0',
    p: {
      xs: '7px 10px',
      sm: '7px 30px',
    },
  }
  const sidePadding: SxProps = {
    pl: {
      xs: '15px',
      sm: '50px',
    },
    pr: {
      xs: '15px',
      sm: '50px',
    },
  }
  return (
    <Box>
      {/* Top nav bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          columnGap: '5px',
          p: {
            xs: '10px 0px',
            sm: '20px 15px',
          },
        }}
      >
        {/* Logo */}
        <SynapseFullLogo textColor="#0B1218" />
        {/* Menu Items */}
        {/* Desktop nav bar, and a mobile hamburger dropdown menu nav bar that contain the same options */}
        {!isSmallView && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Button
              sx={navTextButtonSx}
              href={resourcesLink.toString()}
              target="_blank"
            >
              Portals
            </Button>
            <Button
              sx={{ ...navTextButtonSx, mr: '15px' }}
              href="https://sagebionetworks.org/"
              target="_blank"
            >
              Sage Bionetworks
            </Button>
            {isSignedIn && (
              <Button
                size="large"
                variant="contained"
                color="secondary"
                sx={navButtonSx}
                href={MY_DASHBOARD_LINK}
              >
                View My Dashboard
              </Button>
            )}
            {!isSignedIn && (
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                sx={navButtonSx}
                href={LOGIN_LINK}
              >
                Login
              </Button>
            )}
            {!isSignedIn && (
              <Button
                size="large"
                variant="contained"
                color="secondary"
                sx={navButtonSx}
                href={registrationLink.toString()}
              >
                Register Now
              </Button>
            )}
          </Box>
        )}
        {isSmallView && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              columnGap: '10px',
            }}
          >
            {!isSignedIn && (
              <Button
                variant="contained"
                color="secondary"
                sx={{ ...navButtonSx, textWrap: 'nowrap' }}
                href={registrationLink.toString()}
              >
                Register Now
              </Button>
            )}
            <IconButton
              color="secondary"
              sx={{ borderWidth: 1, borderStyle: 'solid', borderRadius: '0' }}
              onClick={handleClick}
            >
              <MenuOutlined />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {!isSignedIn && (
                <MenuItem
                  onClick={() => {
                    window.open(LOGIN_LINK, '_blank')
                    handleClose()
                  }}
                >
                  <ListItemIcon>
                    <LoginTwoTone fontSize="small" />
                  </ListItemIcon>
                  Login
                </MenuItem>
              )}
              {isSignedIn && (
                <MenuItem
                  onClick={() => {
                    window.open(MY_DASHBOARD_LINK, '_blank')
                    handleClose()
                  }}
                >
                  View My Dashboard
                </MenuItem>
              )}
              <Divider />
              <MenuItem
                onClick={() => {
                  window.open(resourcesLink.toString(), '_blank')
                  handleClose()
                }}
              >
                Portals
              </MenuItem>
              <MenuItem
                onClick={() => {
                  window.open('https://sagebionetworks.org/', '_blank')
                  handleClose()
                }}
              >
                Sage Bionetworks
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Box>
      <Box sx={{ position: 'relative', pb: '80px' }}>
        <Box
          sx={{
            position: 'absolute',
            background: `url(${backgroundInlineJpeg}) lightgray 50% / cover no-repeat`,
            minHeight: '600px',
            width: '100%',
            height: '100%',
            content: "''",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            clipPath: 'polygon(0 0, 100% 0, 100% 65%, 0% 100%)',
          }}
        >
          {' '}
        </Box>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          p: {
            xs: '20px',
            lg: '80px 0px 0px 0px',
          },
          minHeight: {
            xs: '270px',
            md: undefined,
          },
        }}
      >
        <Typography variant="headline1" sx={titleSx}>
          Explore the data
        </Typography>
        <Typography variant="headline1" sx={titleSx}>
          behind&nbsp;
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'the next cure',
              3000,
              'the next diagnostic',
              3000,
              'the next preventive therapy',
              3000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            style={{
              color: '#B5D3CE',
            }}
          />
        </Typography>
      </Box>

      {/* Search */}
      <Box
        sx={{
          pt: '70px',
          maxWidth: '600px',
          m: 'auto',
        }}
      >
        <SynapseHomepageSearch sourceTable={searchAutocompleteTable} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center',
          mt: '30px',
          flexWrap: 'wrap',
        }}
      >
        {/* Hard-coded popular searches because these Chips are above the fold and immediately visible. Any delay showing these chips is a problem.
        The hope is that these "popularSearches" will not change much over time, since they represent the types of data in the platform.
        */}
        {popularSearches.map(value => {
          return (
            <Chip
              key={value}
              label={value}
              onClick={() => onSearch(value)}
              variant="outlined"
              // by default, on hover the background color changes to mostly transparent (4%), which looks terrible on top of the header splash image
              sx={{
                color: '#2A5850',
                backgroundColor: '#DAE9E7',
                '&:hover': { backgroundColor: '#f5f5f3 !important' },
              }}
            />
          )
        })}
      </Box>
      <Box
        sx={{
          display: { xs: 'relative', lg: 'grid' },
          gridTemplateColumns: '50% 50%',
          backgroundColor: '#DAE9E7',
          mt: '150px',
          height: { lg: '608px' }, //force container to the same height as the image
        }}
      >
        <Box
          sx={{
            p: { xs: '25px', lg: '70px 0px 25px 60px' },
            svg: {
              maxWidth: '100%',
            },
          }}
          ref={ref} // use this UI to trigger loading the rest of the page content
        >
          <SageFullLogo width={350} />
          <Typography
            variant="headline2"
            sx={{
              ...defaultHomepageText,
              fontSize: {
                xs: '24px',
                md: '40px',
              },
              lineHeight: {
                xs: '140%',
                md: '60px',
              },
              maxWidth: '600px',
              color: '#38756A',
              mt: '20px',
              fontWeight: 400,
              mb: '35px',
            }}
          >
            Created by <strong>Sage Bionetworks</strong>, Synapse empowers
            biomedical researchers with tools for open science and
            collaboration, forging a path to optimal human health.
          </Typography>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            href="https://www.sagebionetworks.org"
            target="_blank"
            sx={{ p: '5px 25px' }}
          >
            About Sage Bionetworks
          </Button>
        </Box>
        {isDesktopView && (
          <Box sx={{ height: '100%', justifySelf: 'end' }}>
            <Image1 />
          </Box>
        )}
      </Box>
      {/* Below the fold content... */}
      {inView && (
        <Box>
          <Box>
            <Typography
              variant="headline1"
              sx={{
                ...defaultHomepageText,
                textAlign: 'center',
                mt: '100px',
                fontSize: { xs: '32px', md: '40px' },
                lineHeight: '42px',
                mb: '30px',
              }}
            >
              We partner with scientific leaders
            </Typography>
            <Box sx={{ m: 'auto', maxWidth: '750px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  mb: '60px',
                }}
              >
                Synapse is your ecosystem for responsible data sharing,
                innovative data reuse, and collaboration.
              </Typography>
            </Box>
            <SynapsePartners />
            <Box
              sx={{
                pb: '220px',
                clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0% 100%)',
                backgroundColor: 'white',
                zIndex: 100,
              }}
            />
            <Box
              sx={{
                ...sidePadding,
                backgroundColor: '#223549',
                pt: '200px',
                mt: '-200px',
                pb: '5px',
              }}
            >
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  textAlign: 'center',
                  mt: '100px',
                  mb: '70px',
                  color: 'white',
                }}
              >
                Synapse by the numbers
              </Typography>
              <SynapseByTheNumbers metricsTable={generalStatsMetricsTable} />
              <Typography
                variant="headline2"
                sx={{
                  ...defaultHomepageText,
                  textAlign: 'center',
                  fontSize: '36px',
                  lineHeight: '40px',
                  mt: '60px',
                  mb: '25px',
                  color: 'white',
                }}
              >
                Projects trending this week
              </Typography>
              <SynapseTrendingProjects
                past30DaysDownloadMetricsTable={past30DaysDownloadMetricsTable}
              />
            </Box>
            <Box
              sx={{
                pb: '220px',
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 0%)',
                backgroundColor: '#223549',
                zIndex: 100,
              }}
            />
          </Box>
          <Box
            sx={{
              pt: '300px',
              mt: '-220px',
              backgroundColor: '#172430',
            }}
          />

          <Box
            sx={{
              ...sidePadding,
              backgroundColor: '#172430',
            }}
          >
            <Box sx={{ m: 'auto', maxWidth: '1500px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  maxWidth: '700px',
                  pb: {
                    xs: '20px',
                    sm: '100px',
                  },
                  textAlign: {
                    xs: 'center',
                    sm: undefined,
                  },
                }}
              >
                Made for biomedical data reuse and discovery
              </Typography>
              <SynapseFeatures />
            </Box>
          </Box>
          <Box sx={{ ml: '20px' }}>
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                pt: '75px',
                pb: '75px',
              }}
            >
              Featured datasets
            </Typography>
            <SynapseFeaturedDatasets sourceTable={featuredDatasetsTable} />
          </Box>
          <Box
            sx={{
              pb: '190px',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#f5f9f9',
              zIndex: -100,
              mt: '-190px',
              position: 'relative',
            }}
          />
          <Box
            sx={{
              backgroundColor: '#f5f9f9',
              pb: '150px',
            }}
          >
            <Typography
              variant="headline1"
              sx={{
                ...h2Sx,
                textAlign: 'center',
                pt: '75px',
                position: 'relative',
                zIndex: 100,
                backgroundColor: 'rgba(245, 249, 249, .8)',
                borderRadius: '12px',
              }}
            >
              Synapse in action
            </Typography>
            <Box sx={{ m: 'auto', maxWidth: '1100px' }}>
              <Typography
                variant="headline1"
                sx={{
                  ...homepageBodyText,
                  textAlign: 'center',
                  mt: '50px',
                  mb: '100px',
                  position: 'relative',
                  zIndex: 100,
                  backgroundColor: 'rgba(245, 249, 249, .8)',
                  borderRadius: '12px',
                }}
              >
                Explore real-world case studies and success stories showcasing
                how researchers use Synapse to drive innovative biomedical
                discoveries and improve health outcomes.
              </Typography>
            </Box>
            <SynapseInAction tableId={synapseInActionTable} />
          </Box>
          <Box
            sx={{
              ...sidePadding,
              backgroundColor: '#223549',
              pb: '200px',
              position: 'relative',
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                maxWidth: '1200px',
                m: 'auto',
              }}
            >
              <Typography
                variant="headline1"
                sx={{
                  ...h2Sx,
                  color: 'white',
                  pt: '75px',
                }}
              >
                Pricing and Plans
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  ...homepageBodyText,
                  color: 'white',
                  pt: '20px',
                }}
              >
                Synapse is free and open source for all. We offer different
                plans to help you if you need extra storage or help with your
                data management. Find out about managed plans
              </Typography>
              <Link
                href="https://help.synapse.org/docs/Sage-Offerings.2965078125.html"
                target="_blank"
                sx={{
                  color: 'white !important',
                  textDecorationColor: 'white !important',
                  pt: '20px',
                  pb: '30px',
                  display: 'block',
                }}
              >
                Learn more about our plans
              </Link>
              <SynapsePlans />
            </Box>
          </Box>
          <Box
            sx={{
              pb: '190px',
              clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)',
              backgroundColor: '#172430',
              zIndex: 101,
              mt: '-190px',
              position: 'relative',
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default SynapseHomepageV2
