import { GetServerSideProps } from 'next';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { getCookie } from "cookies-next";
import { getCartDetails } from '@/lib/bc-client/queries/getCartDetails';
import { CartDetails } from '@/lib/bc-client/types/cart';
import PageHeading from '@/components/PageHeading';
import CartItemRow from '@/components/Cart/ItemRow';