/**
 * @category Utils
 * @module api/mainClient
 * @desc Module for access to main api
 */

import ClientSingleton from '@/utils/api/mainClient/clientSingleton';

const client = ClientSingleton.getInstance();

export default client;
