import { createAction } from 'redux-actions';
import createFetchHandler from 'Store/Actions/Creators/createFetchHandler';
import createRemoveItemHandler from 'Store/Actions/Creators/createRemoveItemHandler';
import createSaveProviderHandler, { createCancelSaveProviderHandler } from 'Store/Actions/Creators/createSaveProviderHandler';
import createSetSettingValueReducer from 'Store/Actions/Creators/Reducers/createSetSettingValueReducer';
import { createThunk } from 'Store/thunks';
import monitorNewItemsOptions from 'Utilities/Artist/monitorNewItemsOptions';
import monitorOptions from 'Utilities/Artist/monitorOptions';

//
// Variables

export const section = 'settings.rootFolders';

//
// Actions Types

export const FETCH_ROOT_FOLDERS = 'settings/rootFolders/fetchRootFolders';
export const SET_ROOT_FOLDER_VALUE = 'settings/rootFolders/setRootFolderValue';
export const SAVE_ROOT_FOLDER = 'settings/rootFolders/saveRootFolder';
export const CANCEL_SAVE_ROOT_FOLDER = 'settings/rootFolders/cancelSaveRootFolder';
export const DELETE_ROOT_FOLDER = 'settings/rootFolders/deleteRootFolder';

//
// Action Creators

export const fetchRootFolders = createThunk(FETCH_ROOT_FOLDERS);
export const saveRootFolder = createThunk(SAVE_ROOT_FOLDER);
export const cancelSaveRootFolder = createThunk(CANCEL_SAVE_ROOT_FOLDER);
export const deleteRootFolder = createThunk(DELETE_ROOT_FOLDER);

export const setRootFolderValue = createAction(SET_ROOT_FOLDER_VALUE, (payload) => {
  return {
    section,
    ...payload
  };
});

//
// Details

export default {
  //
  // State

  defaultState: {
    isFetching: false,
    isPopulated: false,
    error: null,
    schema: {
      defaultQualityProfileId: 0,
      defaultMetadataProfileId: 0,
      defaultMonitorOption: monitorOptions[0].key,
      defaultNewItemMonitorOption: monitorNewItemsOptions[0].key,
      defaultTags: []
    },
    isSaving: false,
    saveError: null,
    items: [],
    pendingChanges: {}
  },

  //
  // Action Handlers

  actionHandlers: {

    [FETCH_ROOT_FOLDERS]: createFetchHandler(section, '/rootFolder'),

    [SAVE_ROOT_FOLDER]: createSaveProviderHandler(section, '/rootFolder'),
    [CANCEL_SAVE_ROOT_FOLDER]: createCancelSaveProviderHandler(section),
    [DELETE_ROOT_FOLDER]: createRemoveItemHandler(section, '/rootFolder')

  },

  //
  // Reducers

  reducers: {
    [SET_ROOT_FOLDER_VALUE]: createSetSettingValueReducer(section)
  }
};
