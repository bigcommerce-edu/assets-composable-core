import { GetServerSideProps } from 'next';
import Image from 'next/image';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { Product } from '@/lib/bc-client/types/catalog';
import { getProduct } from '@/lib/bc-client/queries/getProduct';
import PageHeading from '@/components/PageHeading';