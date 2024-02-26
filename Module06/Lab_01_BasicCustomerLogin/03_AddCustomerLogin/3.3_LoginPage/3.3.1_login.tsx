import { GetServerSideProps } from 'next';
import getGlobalServerSideProps from '@/lib/getGlobalServerSideProps';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PageHeading from '@/components/PageHeading';