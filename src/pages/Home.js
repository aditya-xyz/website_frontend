import { Grid } from "@mui/material"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import pic from "../img/IMG_0441.jpeg"

const Home = () => {
  return (
    <>
      <Container fixed>
        <Grid
          container
          sx={{
            paddingTop: "50px",
          }}
        >
          <Grid item sm={6}>
            <Box
              component="img"
              sx={{
                borderRadius: ".5rem",
                height: "95%",
                width: "95%",
              }}
              src={pic}
            />
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              fontSize: 17,
            }}
          >
            <h1 className="display-6 text-center">Hi y'all!</h1>
            <p className="mt-4">
              I am a software engineer, dog dad, coffee addict, photography
              enthusiast, and a fan of the outdoors — especially the Colorado
              mountains.
            </p>
            <p className="mt-4">
              I am a Microsoft Power Platform engineer by trade. The goal there
              is to use Microsoft Dataverse and its various connectors and
              services to come up with innovative yet low-code/no-code ways to
              stand up entire projects from the ground up quickly. These could
              be a web app, mobile app, a website, automations, etc. I have also
              done full stack ASP.Net development alongside Power Platform work.
              More recently, I am dabbling in the world of ReactJS and modern
              web architecture.
            </p>
            <p className="mt-4">
              Outside of work, I like to spend my time outdoors with my dog,
              Pixel. It's like being a van-lifer but only on the weekends and
              only using a car, but we make the most of it. My eventual goal is
              to road trip through all 50 states with her. So far, I'm on state
              #25, and Pixel is on #10. If you're interested in following her
              adventures, her Instagram link is in the footer!
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Home
