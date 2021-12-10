import { action, observable, makeObservable } from 'mobx';
import {
    initDefaultTrackVisibility,
    TrackVisibility,
} from 'react-mutation-mapper';
import { getOncoKbIconStyle } from 'shared/lib/AnnotationColumnUtils';

export default class MutationMapperUserSelectionStore {
    @observable trackVisibility: TrackVisibility;
    @observable columnVisibility: {
        [columnId: string]: boolean;
    };
    @observable mergeOncoKbIcons: boolean;

    constructor() {
        makeObservable(this);
        this.trackVisibility = initDefaultTrackVisibility();
        this.mergeOncoKbIcons = getOncoKbIconStyle().mergeIcons;
    }

    @action.bound
    public storeColumnVisibility(columnVisibility: {
        [columnId: string]: boolean;
    }) {
        if (
            JSON.stringify(this.columnVisibility) !==
            JSON.stringify(columnVisibility)
        ) {
            this.columnVisibility = columnVisibility;
        }
    }
}
