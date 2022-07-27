/***********************************************************
 **  @project Nowboard-GC                                 **
 **  @file Config.interface                               **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com> **
 **  @Date 23/04/2021                                     **
 ***********************************************************/
interface OriginPriorityInterfacee {
    label: string;
    data: string;
}
interface YesNoInterface {
    true: string;
    false: string;
}
export interface DesignTableInterface {
    customerRank?: string[];
    equipmentStatus?: any;
    equipmentType?: any;
    gender?: any;
    nameAvatarBackgroundColor?: string;
    origin?: OriginPriorityInterfacee[];
    priority?: OriginPriorityInterfacee[];
    yesNo?: YesNoInterface;
    languague?: string;
}
export interface MenuListInterface {
    Label: string;
    Icon: string;
    Type: 'Link' | 'Modal';
    Data: string[];
    Route?: string;
    Class?: string;
    ComponentModal: any;
}
export {};
