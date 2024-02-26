import { GetServerSideProps } from 'next';
import Image from 'next/image';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { Category } from '@/lib/bc-client/types/catalog';
import { getCategoryWithProducts } from '@/lib/bc-client/queries/getCategoryWithProducts';
import PageHeading from '@/components/PageHeading';