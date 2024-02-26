import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@bigcommerce/components/accordion';
import { Button } from '@bigcommerce/components/button';
import { useState } from 'react';

import { getProductFaqMetafields } from '~/client/queries/get-product-faq-metafields';

import getNextProductFaqs from './_actions/get-next-product-faqs';