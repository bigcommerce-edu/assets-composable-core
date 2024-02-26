import type { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from "cookies-next";
import { login } from '@/lib/bc-client/mutations/login';
import * as jwt from 'jsonwebtoken';