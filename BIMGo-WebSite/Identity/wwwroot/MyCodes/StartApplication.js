switch (WebSiteNewFolder) {
    case 0://open old file
        GetBimModelListedFromPathAndName(WebSiteFilePath, WebSiteFileName);
        break;
    case 1://open new file
        OpenNewFile();
        break;

    default:
        break;
}

