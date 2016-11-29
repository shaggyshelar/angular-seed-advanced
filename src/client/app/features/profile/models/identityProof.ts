import { IdProofType } from './idProofType';

export interface IdentityProof {
    ID: number;
    Type: IdProofType;
    Value: string;
    PermanantAdd: string;
    PermanantAddFilePath: string;
    Status: string;
    Comments: string;
    FilePath: string;
}
