import type { NextApiRequest, NextApiResponse } from 'next';
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { Cart } from '@/lib/bc-client/types/cart';
import { addCartLineItem } from '@/lib/bc-client/mutations/addCartLineItem';
import { createCart } from '@/lib/bc-client/mutations/createCart';