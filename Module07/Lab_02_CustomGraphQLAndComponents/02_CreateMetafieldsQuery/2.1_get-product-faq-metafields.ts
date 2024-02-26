import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { cache } from 'react';
import { z } from 'zod';

import { client } from '..';
import { graphql } from '../generated';