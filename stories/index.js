import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CustomButton from '../src/components/CustomButton'
import 'grommet/grommet.min.css'


storiesOf('CustomButton', module)
  .add('with label', () => <CustomButton label={'Etiqueta'} onClick={action('clicked')} />)

storiesOf('CustomButton', module)
  .add('another label', () => <CustomButton label={'Another'} onClick={action('clicked')} />)
