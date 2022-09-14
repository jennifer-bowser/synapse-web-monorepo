import * as React from 'react'
import { HomePageHeaderConfig } from 'types/portal-config'

const homePageHeader: HomePageHeaderConfig = {
  title: 'Welcome to the ARK Portal',
  summary: (
    <>
      The ARK Portal hosts data generated by a network of research teams working 
      collaboratively to deepen the understanding of Autoimmune and Immune-Mediated Diseases
      <br />
      <br />
      Established by the Accelerating Medicines Partnership® (AMP®)
    </>
  ),
  showBlur: true,
}

export default homePageHeader
